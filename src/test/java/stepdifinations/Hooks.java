package stepdifinations;

import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.BrowserType;

import base.Base;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks extends Base {
	@Before
	public void setUp() {
	ChromeOptions option = new ChromeOptions();
	option.setHeadless(false);
	WebDriverManager.chromedriver().setup();
	driver = new ChromeDriver(option);
//	driver.manage().window().maximize();
//	driver.manage().window().fullscreen();
	}
	//@After
	
	@After
	public void tearDown(Scenario scenario) throws IOException {
		try {
			String screenshotName= scenario.getName().replace("", "");
			if(scenario.isFailed()) {
				scenario.log("this is my failure message");
				TakesScreenshot ts = (TakesScreenshot)driver;
				byte[]screenshot = ts.getScreenshotAs(OutputType.BYTES);
				scenario.attach(screenshot, "image/png", screenshotName);
			}
		}
			catch(Exception e) {
				e.printStackTrace();
			}
		}
		
	public void treardown() {
		driver.close();
	}

}
