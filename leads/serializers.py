from rest_framework import serializers
from.models import Lead
class LeadSerializes(serializers.ModelSerializer):
    class Meta:
        model=Lead
        fields = '__all__'
    