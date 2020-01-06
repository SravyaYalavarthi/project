package com.example.demo.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.example.demo.model.DesignationQualification;

@Repository
public class DesigQualificationDAO {
	public static Connection connectToDB() {
		Connection connection=null;
		try {
			//step1 register the driver
			Class.forName("oracle.jdbc.driver.OracleDriver");
			//step2 create connection
		connection=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","admin");
		return connection;
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	public void addFresher(DesignationQualification dq ) {
		System.out.println(dq);
		//step3 create a statement
	try {
		Connection con=connectToDB();
		PreparedStatement stmt=con.prepareStatement("insert into Details values(?,?,?,?,?,?,?,?,?)");
		stmt.setString(1,dq.getEducationDetails());
		stmt.setDouble(2, dq.getFinalPercentage());
		stmt.setDouble(3, dq.getInterviewScore());
		stmt.setDouble(4, dq.getCommunicationScore());
		stmt.setDouble(5, dq.getTechnicalScore());
		//step4 execute sql query
		int affectedRows=stmt.executeUpdate();
		System.out.println("affectedRows="+affectedRows);
		}catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
	public ArrayList<DesignationQualification> displayFreshers() {
		// TODO Auto-generated method stub
		ArrayList<DesignationQualification> list=new ArrayList<DesignationQualification>();
		try {
		Connection con=connectToDB();
		PreparedStatement stmt=con.prepareStatement("select * from Details");
		ResultSet rs=stmt.executeQuery();  
		while(rs.next()){  
		   DesignationQualification dq1=new DesignationQualification(); 
			dq1.setEducationDetails(rs.getString(1));
			dq1.setFinalPercentage(rs.getDouble(2));
			dq1.setInterviewScore(rs.getDouble(3));
			dq1.setCommunicationScore(rs.getDouble(4));
			dq1.setInterviewScore(rs.getDouble(5));
			
			list.add(dq1);
		}
		con.close();
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
return list;

	}


}
