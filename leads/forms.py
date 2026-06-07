from django import forms
from .models import Lead
class LeadForm(forms.ModelForm):
    class Meta:
        model=Lead
        fields=['name','email','message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Nom'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': 'Email'
            }),
            'message': forms.Textarea(attrs={
                'class': 'form-control',
                'rows': 4
            }),
        }
