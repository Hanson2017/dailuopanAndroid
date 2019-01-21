package dailuopan.android;

import com.oblador.vectoricons.VectorIconsPackage;
import cn.reactnative.modules.qq.QQPackage;
import cn.reactnative.modules.wx.WeChatPackage;
import com.microsoft.codepush.react.CodePush;
import android.app.Application;

import com.tencent.stat.StatConfig;
import com.tencent.stat.StatService;

import cn.jpush.android.api.JPushInterface;
import cn.jpush.reactnativejpush.JPushPackage;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;



public class MainApplication extends Application implements ReactApplication {

    private boolean SHUTDOWN_TOAST = false;
    private boolean SHUTDOWN_LOG = false;

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }  

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage()
            // ,new CodePush(BuildConfig.CODEPUSH_KEY, MainApplication.this, BuildConfig.DEBUG)
            , new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG)
            
          , new VectorIconsPackage()
          ,new QQPackage()
          ,new WeChatPackage()
          ,new JPushPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG)
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    StatService.trackCustomEvent(this, "onCreate", "");
    JPushInterface.init(this);
  }

  // @Override
  //   protected void onPause() {
  //       super.onPause();
  //       JPushInterface.onPause(this);
  //   }

  //   @Override
  //   protected void onResume() {
  //       super.onResume();
  //       JPushInterface.onResume(this);
  //   }

}

    