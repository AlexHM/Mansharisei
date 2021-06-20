package Views;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;

import controller.Controller;
import model.Model;
import java.awt.Color;
import javax.swing.JLabel;
import java.awt.Font;
import javax.swing.JButton;
import javax.swing.BorderFactory;

public class Home extends JFrame implements Views {

	private JPanel contentPane;
	private Controller controller;
	private Model model;
	private JLabel lblNewLabel;
	private JLabel lblIconManage;
	private JButton btnExit;

	public Home() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 903, 501);
		contentPane = new JPanel();
		contentPane.setBackground(Color.WHITE);
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		lblNewLabel = new JLabel("Manage me");
		lblNewLabel.setForeground(new Color(6, 1, 15));
		lblNewLabel.setFont(new Font("SansSerif", Font.PLAIN, 29));
		lblNewLabel.setBounds(304, 36, 160, 51);
		contentPane.add(lblNewLabel);
		
		lblIconManage = new JLabel("");
		lblIconManage.setBounds(518, 61, 108, 78);
		contentPane.add(lblIconManage);
		
		btnExit = new JButton("");
		btnExit.setFocusPainted(false);
		btnExit.setContentAreaFilled(false);
		btnExit.setBorderPainted(false);
		btnExit.setBorder(BorderFactory.createEmptyBorder(0, 0, 0, 0));
		btnExit.setBackground(Color.WHITE);
		btnExit.setBounds(762, 36, 83, 49);
		contentPane.add(btnExit);
	}

	public void setController(Controller controller) {
		this.controller = controller;

	}

	public void setModel(Model model) {
		this.model = model;

	}
}
