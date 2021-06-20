package controller;

import Views.AddData;
import Views.Home;
import model.Model;

public class Launcher {

	public static void main(String[] args) {
		
		
		//Creating objects of windows

		Launcher launcher = new Launcher();
		Controller controller= new Controller();
		Model model= new Model();
		Home home= new Home();
		AddData addData= new AddData();
		
		
		//Connecting model with the views
		
		model.setHome(home);
		model.setAddData(addData);
		
		//Connecting controller with views and Model
		
		controller.setModel(model);
		controller.setHome(home);
		controller.setAddData(addData);
		
		//Relationshio views with model and controll
		
		home.setController(controller);
		home.setModel(model);
		addData.setController(controller);
		addData.setModel(model);
		
		home.setVisible(true);
		
	}

}
