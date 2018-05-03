package com.starterkit;


import com.facebook.react.ReactPackage;
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

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(

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