<template>
	<view class="card">
		<view class="card-header">
			<view class="user">
				<image class="avatar" :src="item.userpic" @click="openSpace"></image>
				<view class="info">
					<view class="nick-name">{{item.username}}</view>
					<text class="time">{{item.newstime}}</text>
				</view>
			</view>
			<view class="btn animated fast" 
			hover-class="jello" 
			v-if="!item.isFllow"
			@click="fllow">关注</view>
		</view>
		<view class="card-content" @click="openDetail">
			<!-- 标题 -->
			<view class="title h4">{{item.title}}</view>
			<image class="title-pic" :src="item.titlepic" mode=""></image>
		</view>
		<view class="card-footer">
			<!-- 顶 -->
			<view class="item animated" 
			hover-class="jello text-main" 
			@click="doSupport('support')" 
			:class="{'support-active': item.support.type === 'support'}">
				<text class="iconfont icon-dianzan"></text>
				<text class="ml-2">{{item.support.support_count > 0 ? item.support.support_count : '赞'}}</text>
			</view>
			<!-- 踩 -->
			<view class="item animated" 
			hover-class="jello text-main" 
			@click="doSupport('unsupport')" 
			:class="item.support.type === 'unsupport' ? 'support-active' : ''">
				<text class="iconfont icon-cai"></text>
				<text class="ml-2">{{item.support.unsupport_count > 0 ? item.support.unsupport_count : '踩'}}</text>
			</view>
			<!-- 消息 -->
			<view class="item animated" hover-class="jello text-main">
				<text class="iconfont icon-xiaoxi" @click="openDetail"></text>
				<text class="ml-2">{{item.comment_count > 0 ? item.comment_count : '消息'}}</text>
			</view>
			<!-- 分享 -->
			<view class="item animated" hover-class="jello text-main">
				<text class="iconfont icon-fenxiang"></text>
				<text class="ml-2">{{item.share_num > 0 ? item.share_num : '分享'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object
			},
			index: {
				type: Number
			}
		},
		methods: {
			openSpace() {
				console.log('打开个人空间')
			},
			openDetail() {
				console.log('打开详情页')
			},
			doSupport(type) {
				this.$emit('doSupport', {
					type,
					index: this.index
				})
			},
			fllow () {
				this.$emit('fllow', this.index)
			},
		}
	}
</script>

<style lang="scss">
	@import "../../common/scss/variable.scss";

	.card {
		padding: 10rpx 20rpx;

		.card-header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.user {
				display: flex;
				align-items: center;

				.avatar {
					width: 65rpx;
					height: 65rpx;
					border-radius: 100%;
				}

				.info {
					margin-left: 20rpx;

					.nick-name {
						font-size: 30rpx;
						line-height: 1.5;
					}

					.time {
						color: $color-muted;
					}
				}
			}

			.btn {
				width: 100rpx;
				height: 50rpx;
				text-align: center;
				line-height: 50rpx;
				border-radius: 5px;
				color: $color-white;
				background-color: $color-theme;
			}
		}

		.card-content {
			.title {
				margin: 20rpx 0;
				font-weight: 700;
			}

			.title-pic {
				width: 100%;
				border-radius: 5px;
			}
		}

		.card-footer {
			display: flex;
			margin-top: 10rpx;
			
			view {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;

				.iconfont {
					font-size: 40rpx;
				}
				
				&.support-active {
					color: $color-theme;
				}
			}
		}
	}
</style>
