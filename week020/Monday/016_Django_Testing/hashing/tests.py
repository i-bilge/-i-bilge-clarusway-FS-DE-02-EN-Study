from selenium import webdriver
from django.test import TestCase

class FunctionalTestCase():
    pass

class UnitTestCase():
    pass

browser = webdriver.Chrome()

browser.get("http://127.0.0.1:8000/")

assert browser.page_source.find("Enter hash here")

