<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="d" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<table align="center" border="1">
<d:forEach items="${display1}" var="item">
<tr>
<td><d:out value="${item.getQualification()}"></d:out></td>
<td><d:out value="${item.getFinalPercentage()}"></d:out></td>
<td><d:out value="${item.getInterviewScore()}"></d:out></td>
<td><d:out value="${item.getCommunicationScore()}"></d:out></td>
<td><d:out value="${item.getTechnicalScore()}"></d:out></td>
</tr>
</d:forEach></table>

</body>
</html>