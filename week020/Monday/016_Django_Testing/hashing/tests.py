from selenium import webdriver
from django.test import TestCase
import time

class FunctionalTestCase(TestCase):
    def setUp(self):
        self.browser = webdriver.Chrome()
    def tearDown(self):
        self.browser.quit()

    def test_homepage(self):
        self.browser.get("http://127.0.0.1:8000/")
        time.sleep(1)
        assert self.browser.page_source.find("Enter hash here")


class UnitTestCase(TestCase):
    pass




