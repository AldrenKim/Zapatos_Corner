from django.shortcuts import render
from django.views.generic import TemplateView

class DashboardPageView(TemplateView):
    template_name='dashboard.html'

class HomePageView(TemplateView):
    template_name='home.html'

class LoginPageView(TemplateView):
    template_name='index.html'

class ProductRegPageView(TemplateView):
    template_name='productReg.html'

class RegisterPageView(TemplateView):
    template_name='register.html'

class DashboardCustomerPageView(TemplateView):
    template_name='customer.html'

class DashboardProdPageView(TemplateView):
    template_name='product.html'