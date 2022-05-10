<#assign creat_date = DATE_CREATED?date("yyyyMMddHHmmss")>
<span>입력 ${creat_date?string("yyyy.MM.dd HH:mm")}</span>
<#if (DATE_MODIFIED?has_content)>
    <#assign update_date = DATE_MODIFIED?date("yyyyMMddHHmmss")>
    <span>${" | "}수정 ${update_date?string("yyyy.MM.dd HH:mm")}</span>
</#if>
