from django import forms
from .models import Lead
class LeadForm(forms.ModelForm):
    class Meta:
        model=Lead
        fields=['name','email','phone','company','message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Nom'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': 'Email'
            }),
            'phone': forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Téléphone'
            }),

            'company': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Entreprise'
            }),
            'message': forms.Textarea(attrs={
                'class': 'form-control',
                'rows': 4
            }),
        }
