//
//  MSAudioManager.h
//  AudioManager
//
//  Created by mr.scorpion on 2016/09/20.
//  Copyright © 2016年 mr.scorpion All rights reserved.
//  AudioManager 音频管理类

#import <Foundation/Foundation.h>

/*!
 @brief MSAudioManager
 
 @discussion    This manager was designed and implemented to help user manager wired control.
 
 This file contains the most importnant method and properties decalaration. It's parted by five methods in total, which can be used to perform wired control.
 
 @author mr
 @copyright  2016 mr.scorpion
 @version    16.09.20
 */
@interface MSAudioManager : NSObject
/*!
 @brief sharedInstance 管理单例
 @discussion creat AudioManager Instance
 
 @return instance
 */
+ (instancetype)sharedInstance;

/*!
 @brief Internal Command 内置振动指令
 @discussion send the vibration command by default
 
 @param lever 档位
 */
- (void)sendInternalWithLever:(NSInteger)lever;
/*!
 @brief Custom Command 手绘振动指令
 @discussion send the vibration command by custom
 
 @param lever 档位
 */
- (void)sendCustomWithLever:(NSInteger)lever;
/*!
 @brief 停止振动指令
 @discussion send the stop command
 */
- (void)sendStop;
/*!
 @brief 销毁管理器
 @discusstion destory the tool - 只提供接口，非特殊情况，不推荐使用，若使用建议修改设计模式。
 */
- (void)destory;
@end
