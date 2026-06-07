from django.shortcuts import render,redirect, get_object_or_404
from django.http import HttpResponse,JsonResponse
from .models import Lead
from .forms import LeadForm
import requests, json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def home(request):
    leads=Lead.objects.all()
    return render(request,'leads/home.html',{
        "leads":leads
    })


def addLead(request):
    if request.method=="POST":
        # name=request.POST.get("name")
        # email=request.POST.get("email")
        # message=request.POST.get("message")
        # Lead.objects.create(name=name,email=email,message=message)
        form=LeadForm(request.POST)
        if form.is_valid():
            lead =form.save()
            try:
                requests.post("http://localhost:5678/webhook-test/new-lead",
                json={
                    "id":lead.id,
                    "name": lead.name,
                    "email": lead.email,
                    "message": lead.message
                }, timeout=5)
                
            except Exception as e:
                print("erreur n8n :" , e)   
            return redirect("home")
        
    else:
         form=LeadForm()
    return render(request,'leads/newLead.html',{"form":form})


def leads_api(request):
    leads=Lead.objects.all()
    data=[]
    for lead in leads:
        data.append({
            "id":lead.id,
            "name":lead.name,
            "email":lead.email,
            "message":lead.message,
        })
    return JsonResponse(data,safe=False)    

def edit_lead(request,id):
    lead=get_object_or_404(Lead,id=id)
    if request.method == "POST":

        form = LeadForm(
            request.POST,
            instance=lead
        )

        if form.is_valid():
            form.save()
            return redirect("home")
    else:
        form=LeadForm(instance=lead)    
    return render(request,"leads/edit_lead.html",{"form":form})

def delete_lead(request,id):
    lead=get_object_or_404(Lead,id=id)
    lead.delete()
    return redirect("home")
@csrf_exempt
def  update_lead_status(request):
    if request.method=="POST":
        data=json.loads(request.body)
        lead=Lead.objects.get(id=data["id"])
        lead.status=data["status"]
        lead.save()
        return JsonResponse({"success":True})
        
        
