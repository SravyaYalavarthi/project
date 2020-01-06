package com.example.demo.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.example.demo.dao.DesigQualificationDAO;
import com.example.demo.model.DesignationQualification;

@Service
public class DesigQualificationServices {
	DesigQualificationDAO dao;
	public void addFresher(DesignationQualification dq) {
		dao.addFresher(dq);
	}
public ArrayList<DesignationQualification> getMessage(){
	return dao.displayFreshers();
}
}
