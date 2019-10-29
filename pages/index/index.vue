<template>
	<view class="content">
		<view>
			<scroll-view 
			scroll-x class="scroll-row" 
			:scroll-into-view="scrollInto" scroll-with-animation>
				<view class="scroll-row-item"
				 v-for="(item, index) in tabBars"
				 @click="changeIndex(index)"
				 :key="index" :id="'tab'+index" :class="{active: index === tabIndex}">{{item.name}}</view>
			</scroll-view>
		</view>
		<view>
			<!-- swiper和scroll-view都要设置高度 -->
			<swiper :duration="150" :current="tabIndex" @change="onChangeTab" :style="{height: swiperHeight + 'px'}">
				<swiper-item v-for="(item, index) in tabBars" :key="index">
					<scroll-view scroll-y="true" class="swiper-item" :style="{height: swiperHeight + 'px'}">
					<block v-for="(item2, index2) in list" :key="index2">
						<divider></divider>
						<common-list 
						:item="item2" 
						:index="index2" 
						@fllow="fllow" @doSupport="doSupport"></common-list>
					</block>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import CommonList from '../../components/common/common-list.vue'
	export default {
		data() {
			return {
				scrollInto: '',
				swiperHeight: 600,
				tabIndex: 0,
				tabBars: [
					{
						name: '关注'
					},
					{
						name: '推荐'
					},
					{
						name: '体育'
					},
					{
						name: '热点'
					},
					{
						name: '财经'
					},
					{
						name: '娱乐'
					},
					{
						name: '时事'
					}
				],
				list: [
					{
						username: '张三',
						userpic: '/static/demo/datapic/1.jpg',
						newstime: '2019-07-01 下午 4:22',
						isFllow: false,
						title: '今天你吃了吗1？',
						titlepic: '/static/demo/datapic/1.jpg',
						support: {
							type: '',
							support_count: 0,
							unsupport_count: 0
						},
						comment_count: 2,
						share_num: 2
					},
					{
						username: '张三',
						userpic: '/static/demo/datapic/1.jpg',
						newstime: '2019-07-01 下午 4:22',
						isFllow: false,
						title: '今天你吃了吗1？',
						titlepic: '/static/demo/datapic/1.jpg',
						support: {
							type: 'support',
							support_count: 1,
							unsupport_count: 2
						},
						comment_count: 2,
						share_num: 2
					},
					{
						username: '张三',
						userpic: '/static/demo/datapic/1.jpg',
						newstime: '2019-07-01 下午 4:22',
						isFllow: false,
						title: '今天你吃了吗？',
						titlepic: '/static/demo/datapic/1.jpg',
						support: {
							type: 'support',
							support_count: 1,
							unsupport_count: 2
						},
						comment_count: 2,
						share_num: 2
					}
				]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.swiperHeight = res.windowHeight - uni.upx2px(100)
				}
			})
		},
		methods: {
			// 修改导航内容
			changeIndex(index) {
				if (this.tabIndex === index) return
				this.tabIndex = index
				this.scrollInto = 'tab' + index
			},
			// 监听swpier滚动
			onChangeTab(e) {
				const index = e.detail.current
				this.changeIndex(index)
			},
			// 关注
			fllow(index) {
				console.log(index)
				this.list[index].isFllow = true
				uni.showToast({
					title: '关注成功'
				})
			},
			// 顶踩操作
			doSupport(e) {
				const { type, index } = e
				const item = this.list[index]
				const countType = `${type}_count`
				if (item.support.type === '') {
					// 未进行过顶踩操作
					item.support[countType]++
				} else if (type === 'support' && item.support.type === 'unsupport') {
					// 之前进行了踩操作
					item.support.unsupport_count--
					item.support.support_count++
				} else if (type === 'unsupport' && item.support.type === 'support') {
					// 之前进行了顶操作
					item.support.unsupport_count++
					item.support.support_count--
				}
				item.support.type = type
			}
		},
		components: {
			CommonList
		}
	}
</script>

<style lang="scss">
	@import "../../common/scss/variable.scss";
	
	.content {
		.scroll-row {
			width: 100%;
			white-space: nowrap;
			.scroll-row-item {
				display: inline-block;
				width: 150rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 14px;
				&.active {
					font-size: 18px;
					color: $color-theme;
				}
			}
		}
	}
</style>
