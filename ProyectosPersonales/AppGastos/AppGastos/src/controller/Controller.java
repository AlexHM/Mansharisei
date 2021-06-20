package controller;

import Views.AddData;
import Views.Home;
import Views.Views;
import model.Model;

public class Controller {

	Model model;
	private Views[] myViews;

	// BUILDER

	public Controller() {

		this.myViews = new Views[5];
		model = new Model();
	}
	
	public void ChangeWindows(int fromTo, int until) {
		myViews[fromTo].setVisible(false);
		myViews[until].setVisible(true);
	}

	
	//Setters
	
	public void setHome(Home home) {
		this.myViews[0] = home;

	}
	public void setAddData(AddData addData) {
		this.myViews[1] = addData;
	}


	public void setModel(Model model) {
		this.model = model;

	}

}
