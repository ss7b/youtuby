$(function(){
    $(".filter-icon").click(function(){
        $(".filters-col").slideToggle("slow")
    })
    $("input:checkbox").click(function() {
        let box = $(this);
        if(box.is(":checked")){
        let group = "input:checkbox[name='"+box.attr("name")+"']"
            $(group).prop("checked",false)
            box.prop("checked",true)
        }
    })
})