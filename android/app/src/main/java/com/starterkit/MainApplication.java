package com.starterkit;


import com.evollu.react.fcm.FIRMessagingPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.microsoft.codepush.react.CodePush;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  @Override
  public String getJSBundleFile() {
    return CodePush.getJSBundleFile();
  }

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new FIRMessagingPackage(),
            new VectorIconsPackage(),
            new CodePush("", getApplicationContext(), BuildConfig.DEBUG)
    );
  }
  @Override
  public String getJSMainModuleName() {
    return "index";
  }
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}