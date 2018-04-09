from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Work,Post,Experiment,Week_repo,Blog
# Create your views here.
def index(request):
    posts = Post.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    exps=Experiment.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    works=Work.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/index.html', {'posts': posts,'exps':exps,'works':works})

def work_detail(request, pk):
    work = get_object_or_404(Work, pk=pk)
    works=Work.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/work_detail.html', {'work': work,'works':works})

def post_detail(request, pk):
    posts = Post.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post,'posts': posts})

def exp_detail(request, pk):
    exps=Experiment.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    exp = get_object_or_404(Experiment, pk=pk)
    return render(request, 'blog/exp_detail.html', {'exp': exp,'exps':exps})

#My blog VIEWS
def home(request):
    reports=Week_repo.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    blogs=Blog.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/home.html',{'reports':reports,'blogs':blogs})

def report_detail(request, pk):
    report = get_object_or_404(Week_repo, pk=pk)
    reports=Week_repo.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/report_detail.html', {'report': report,'reports':reports})

def blog_detail(request, pk):
    blog = get_object_or_404(Blog, pk=pk)
    blogs=Blog.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/blog_detail.html', {'blog': blog,'blogs':blogs})

def d2(request):
    return render(request, 'd3/d2.html')

def d3(request):
    return render(request, 'd3/d3.html')

def d4(request):
    return render(request, 'd3/d4.html')
