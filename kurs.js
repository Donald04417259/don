<style>
 textarea {
  width: 100%;
  max-width: 500px;
 }
</style>
<script>
function moveCaretToStart(inputObject)
{
if (inputObject.selectionStart)
{
 inputObject.setSelectionRange(0,0);
 inputObject.focus();
}
}
function moveCaretToEnd(inputObject)
{
if (inputObject.selectionStart)
{
 var end = inputObject.value.length;
 inputObject.setSelectionRange(end,end);
 inputObject.focus();
}
}
</script>
<form>
    <p>
        <label> В начало:<br>
            <textarea onclick="moveCaretToStart(this)">Кликните в любом месте этой текстовой области, и курсор окажется в начале текста</textarea>
        </label>
    </p>
    <p>
        <label> В конец:<br>
            <textarea onclick="moveCaretToEnd(this)">Кликните в любом месте этой текстовой области, и курсор окажется в конце текста</textarea>
        </label>
    </p>
</form>
