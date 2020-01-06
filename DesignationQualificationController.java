package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.DesignationQualification;
import com.example.demo.services.DesigQualificationServices;

@Controller
@ResponseBody
public class DesignationQualificationController {
	
@Autowired
DesigQualificationServices dqs;
@PostMapping("/qua")
public void addFresher(@RequestBody() DesignationQualification dq) {
	dqs.addFresher(dq);
}

@GetMapping
public ArrayList<DesignationQualification> getMessage(){
	return dqs.getMessage();
}

}
