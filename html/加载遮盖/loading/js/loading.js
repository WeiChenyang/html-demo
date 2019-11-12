// loading的显示与隐藏
function showLoading(open) {
	var $loading = 
		`<div id="mask-wrap">                    
			<div id="loading">
				<i class="fa fa-spinner fa-spin fa-3x"></i>
				<p>正在加载中...</p>
			</div>
		</div>`;
	if (open == null) {
		open = true;
	}
	if (open) {
		$("body").prepend($loading);
		$("#mask-wrap").show();
	} else {
		$("#mask-wrap").hide();
	}
}