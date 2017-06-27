from django.http import JsonResponse
from django.views.generic.base import TemplateView
from django import forms
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.conf import settings
from django.utils.decorators import method_decorator


class HomePageView(TemplateView):
    template_name = "index.html"

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, request, *args, **kwargs):
        return super(HomePageView, self).dispatch(request, *args, **kwargs)


class ContactForm(forms.Form):
    message = forms.CharField(required=True, widget=forms.Textarea)
    from_email = forms.EmailField(label="email", required=True)


@ensure_csrf_cookie
def email(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            from_email = form.cleaned_data['from_email']
            message = form.cleaned_data['message']
            if settings.EMAIL_HOST_USER:
                try:
                    send_mail(subject='Inquiry', message=(from_email + ' sent you a message: ' + message), from_email=from_email, recipient_list=['gabrielle.m.harrison@gmail.com'])
                except BadHeaderError:
                    return HttpResponse('Invalid header found.')
            return JsonResponse({'result': 'success'})
        return JsonResponse({'result': 'error'})


def success(request):
    return JsonResponse({'result': 'success'})