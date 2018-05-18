from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Experiment,Week_repo,Blog
# Create your views here.
def index(request):
    exps=Experiment.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    reports=Week_repo.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/index.html', {'exps':exps,'reports':reports})

def report_detail(request, pk):
    report = get_object_or_404(Week_repo, pk=pk)
    reports=Week_repo.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/report_detail.html', {'report': report,'reports':reports})

def exp_detail(request, pk):
    exps=Experiment.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    exp = get_object_or_404(Experiment, pk=pk)
    return render(request, 'blog/exp_detail.html', {'exp': exp,'exps':exps})

#My blog VIEWS
def home(request):
    reports=Week_repo.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    blogs=Blog.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/home.html',{'reports':reports,'blogs':blogs})

def blog_detail(request, pk):
    blog = get_object_or_404(Blog, pk=pk)
    blogs=Blog.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/blog_detail.html', {'blog': blog,'blogs':blogs})

def game(request):
    return render(request,'blog/game.html')

def d2(request):
    return render(request, 'd3/d2.html')

def d3(request):
    return render(request, 'd3/d3.html')

def d4(request):
    return render(request, 'd3/d4.html')
