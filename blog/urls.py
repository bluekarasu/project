from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^d2',views.d2,name='d2'),
    url(r'^d3',views.d3,name='d3'),
    url(r'^d4',views.d4,name='d4'),
    url(r'^home',views.home,name='home'),
    url(r'^game',views.game,name='game'),
    url(r'^exp/(?P<pk>\d+)/$', views.exp_detail, name='exp_detail'),
    url(r'^report/(?P<pk>\d+)/$', views.report_detail, name='report_detail'),
    url(r'^blog/(?P<pk>\d+)/$', views.blog_detail, name='blog_detail'),
]
