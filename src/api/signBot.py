from selenium import webdriver
from time import sleep

# Automatically sign a petition on colorofchange.org
def signPetition(link, fname, lname, email, zipcode):
    driver = webdriver.Chrome()
    driver.get(link)
    try:
        # Find the form elements on the page
        fnamebox = driver.find_element_by_name("first_name")
        lnamebox = driver.find_element_by_name("last_name")
        emailbox = driver.find_element_by_name("email")
        zipcodebox = driver.find_element_by_name("zip")
        signbutton = driver.find_element_by_xpath("""//*[@id="content"]/div/div/section/div/div[1]/div/div[1]/form/div[3]/button""")
    except:
        print("Error finding the form elements.")
        return False

    fnamebox.send_keys(fname)
    sleep(0.5)
    lnamebox.send_keys(lname)
    sleep(0.5)
    emailbox.send_keys(email)
    sleep(0.5)
    zipcodebox.send_keys(zipcode)
    sleep(0.5)
    signbutton.click()
    sleep(1.0)
    driver.close()

    return True

if __name__ == '__main__':
    link = "https://act.colorofchange.org/sign/congress_martha_wright_reed?source=coc_main_website"
    fname = "Rob"
    lname = "Camber"
    email = "robc@gmail.com"
    zipcode = "92612"
    signPetition(link, fname, lname, email, zipcode)