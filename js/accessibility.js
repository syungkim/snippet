/**********************
* for Image in Label Tag
* Accessibility Improve
***********************/
function fe_label(){
	$("label").each(function(){
		var $self = $(this);
		if( $self.find("img").size() > 0 ){
			$self.bind("click", function(){
				$target = $("#" + $self.attr("for"));
				if( $target.is("input[type=checkbox]") || $target.is("input[type=radio]") || $target.is("select") ){
					$target.click();
				}
				$target.focus();
			});
		}
	});
}