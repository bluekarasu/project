from django.db import models
from django.utils import timezone
#INDEX PAGE
class Week_repo(models.Model):
    author=models.ForeignKey('auth.User',on_delete=models.CASCADE)
    title=models.CharField(max_length=200)
    text=models.TextField(default='report')
    document=models.FileField(upload_to='weeklyrepo/')
    created_date=models.DateTimeField(
        default=timezone.now)
    def publish(self):
        self.created_date=timezone.now()
        self.save()
    def __str__(self):
        return self.title

class Experiment(models.Model):
    author=models.ForeignKey('auth.User',on_delete=models.CASCADE)
    title=models.CharField(max_length=200)
    text=models.TextField()
    created_date=models.DateTimeField(
        default=timezone.now)
    def publish(self):
        self.published_date=timezone.now()
        self.save()
    def __str__(self):
        return self.title
#MY BLOG
class Blog(models.Model):
    author=models.ForeignKey('auth.User',on_delete=models.CASCADE)
    title=models.CharField(max_length=200)
    about=models.TextField(default='about')
    text=models.TextField()
    image = models.ImageField(upload_to="images/", blank=True, null=True, verbose_name= 'Background Image')
    created_date=models.DateTimeField(
        default=timezone.now)
    def publish(self):
        self.published_date=timezone.now()
        self.save()
    def __str__(self):
        return self.title
