from django.db import models
from django.utils import timezone
#INDEX PAGE
class Work(models.Model):
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

class Post(models.Model):
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

class Blog(models.Model):
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
