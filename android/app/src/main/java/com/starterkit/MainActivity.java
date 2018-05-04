package com.starterkit;

import android.content.Intent;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {
    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
                setIntent(intent);
            }
}