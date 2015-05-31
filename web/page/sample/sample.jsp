<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Sample Page</title>
    <%@include file="/WEB-INF/jsp/style.jsp" %>
  </head>
  <body>
    
    <form id="myForm">
      <div>
        <label for="userName">ユーザー名 : </label>
        <input type="text" name="userName" id="userName"/>
      </div>
      
      <div>
        <label for="age">年齢 : </label>
        <input type="text" name="age" id="age" />
      </div>
      
      <button id="registerButton" type="button">登録</button>
    </form>
    
    <script data-main="<c:url value="/js/app/page/sample/sample.js" />"
            src="<c:url value="/js/lib/requirejs/require.js" />">
    </script>
  </body>
</html>
