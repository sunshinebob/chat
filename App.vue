<script>
	export default {
		// app应用开启时候
		onLaunch: function() {
			// 更新检测
			// 网络监听 
			// 初始化数据加载
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		// app隐藏的时候
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* 引入官方公共css */
	@import "./common/uni.css";
	/* 引入基础图标库 */
	@import "./common/icon.css";
	/* 引入动画看 */
	@import "./common/animate.css";
	/* 引入自定义样式库 */
	@import "./common/free.css";
	/* 引入自定义公共样式库 */
	@import "./common/scss/index.scss";
</style>
