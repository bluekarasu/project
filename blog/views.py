from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post,Experiment,Week_repo,Photo
# Create your views here.
def index(request):
    posts = Post.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    photos=Photo.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    exps=Experiment.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    reports=Week_repo.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/index.html', {'posts': posts,'exps':exps,'reports':reports,'photos':photos})

def report_detail(request, pk):
    report = get_object_or_404(Week_repo, pk=pk)
    reports=Week_repo.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/report_detail.html', {'report': report,'reports':reports})

def post_detail(request, pk):
    posts = Post.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post,'posts': posts})

def exp_detail(request, pk):
    exps=Experiment.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    exp = get_object_or_404(Experiment, pk=pk)
    return render(request, 'blog/exp_detail.html', {'exp': exp,'exps':exps})
