from django.db import models

# Create your models here.
class Lead(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    message=models.TextField()
    status=models.CharField(max_length=20, default="Pending")
    phone=models.CharField(max_length=10,blank=True)
    company=models.CharField(max_length=100,blank=True)
    score=models.IntegerField(default=0)

    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name