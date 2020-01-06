package com.example.demo.model;

public class DesignationQualification {
	private String educationDetails;
	private double finalPercentage;
	private double interviewScore;
	private double communicationScore;
	private double technicalScore;
	public String getEducationDetails() {
		return educationDetails;
	}
	public void setEducationDetails(String educationDetails) {
		this.educationDetails = educationDetails;
	}
	public double getFinalPercentage() {
		return finalPercentage;
	}
	public void setFinalPercentage(double finalPercentage) {
		this.finalPercentage = finalPercentage;
	}
	public double getInterviewScore() {
		return interviewScore;
	}
	public void setInterviewScore(double interviewScore) {
		this.interviewScore = interviewScore;
	}
	public double getCommunicationScore() {
		return communicationScore;
	}
	public void setCommunicationScore(double communicationScore) {
		this.communicationScore = communicationScore;
	}
	
	public double getTechnicalScore() {
		return technicalScore;
	}
	public void setTechnicalScore(double technicalScore) {
		this.technicalScore = technicalScore;
	}
	@Override
	public String toString() {
		return "DesignationQualification [educationDetails=" + educationDetails + ", finalPercentage=" + finalPercentage
				+ ", interviewScore=" + interviewScore + ", communicationScore=" + communicationScore
				+ ", technicalScore=" + technicalScore + "]";
	}

}
