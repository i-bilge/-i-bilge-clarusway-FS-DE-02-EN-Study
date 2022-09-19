import hashlib
from selenium import webdriver
from django.test import TestCase
import time
from .forms import HashForm

# class FunctionalTestCase(TestCase):
#     def setUp(self):
#         self.browser = webdriver.Chrome()
#     def tearDown(self):
#         self.browser.quit()

#     def test_homepage(self):
#         self.browser.get("http://127.0.0.1:8000/")
#         time.sleep(1)
#         assert self.browser.page_source.find("Enter hash here")

#     def test_hash_of_hello(self):
#         self.browser.get("http://127.0.0.1:8000/")
#         text =  self.browser.find_element_by_id('id_text')
#         text.send_keys('hello')
#         self.browser.find_element_by_name('submit').click()
#         self.assertInHTML('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824', self.browser.page_source)


class UnitTestCase(TestCase):

    def test_home_template_rendering(self):
        response = self.client.get('/')
        self.assertTemplateUsed(response, 'hashing/home.html')

    def test_hash_form(self):
        form = HashForm(data={'text':'hello'})
        self.assertTrue(form.is_valid())
    
    def test_hash_func_works(self):
        hash = hashlib.sha256('hello'.encode('utf-8')).hexdigest()
        self.assertEqual('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824', hash)

