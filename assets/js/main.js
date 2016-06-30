$(function() {
  var ts3v_url_1 = "https://www.tsviewer.com/ts3viewer.php?ID=1075592&text=757575&text_size=10&text_family=1&text_s_color=000000&text_s_weight=bold&text_s_style=normal&text_s_variant=normal&text_s_decoration=none&text_i_color=&text_i_weight=normal&text_i_style=normal&text_i_variant=normal&text_i_decoration=none&text_c_color=&text_c_weight=normal&text_c_style=normal&text_c_variant=normal&text_c_decoration=none&text_u_color=000000&text_u_weight=bold&text_u_style=normal&text_u_variant=normal&text_u_decoration=none&text_s_color_h=&text_s_weight_h=bold&text_s_style_h=normal&text_s_variant_h=normal&text_s_decoration_h=none&text_i_color_h=000000&text_i_weight_h=normal&text_i_style_h=normal&text_i_variant_h=normal&text_i_decoration_h=underline&text_c_color_h=&text_c_weight_h=normal&text_c_style_h=normal&text_c_variant_h=normal&text_c_decoration_h=none&text_u_color_h=&text_u_weight_h=bold&text_u_style_h=normal&text_u_variant_h=normal&text_u_decoration_h=none&flags=0&iconset=default_colored_2014";
  ts3v_display.init(ts3v_url_1, 1075592, 100);
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-60251580-1', 'auto');
ga('send', 'pageview');

var updateTime = function() {
	$('.bus .time').each(function() {
		var time = moment($(this).attr('date'));
		var minutes = Math.round(moment.duration(time.diff(moment())).asMinutes());
		if(minutes >= 0)
			$(this).html(minutes + '<small>' + time.format('HH:mm') + '</small>');
		else
			$(this).parent().remove();
	});
};
setInterval(updateTime, 30000);
updateTime();

emojione.imageType = 'svg';

$('.logo').html(emojione.toImage($('.logo').html()));