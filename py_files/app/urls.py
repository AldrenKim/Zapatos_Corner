from django.urls import path
from . views import(

    DashboardPageView,
    HomePageView,
    LoginPageView,
    ProductRegPageView,
    RegisterPageView,
    DashboardCustomerPageView,
    DashboardProdPageView
)

urlpatterns =[
    path('', HomePageView.as_view(), name='home'),
    path('home/dashboard/', DashboardPageView.as_view(), name ='dashboard'),
    path('home/dashboard/customer', DashboardCustomerPageView.as_view(), name ='customer'),
    path('home/dashboard/product', DashboardProdPageView.as_view(), name ='product-dash'),
    path('login/', LoginPageView.as_view(), name='login'),
    path('register/product', ProductRegPageView.as_view(), name='product'),
    path('register/costumer', RegisterPageView.as_view(), name='register'),
]
