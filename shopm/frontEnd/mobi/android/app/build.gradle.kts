plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.hilt)
//    alias(libs.plugins.kapt)
    kotlin("kapt")

//    kotlin("multiplatform")
    alias(libs.plugins.kotlin.compose)
}

android {
    namespace = "com.example.shopm"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.example.shopm"
        minSdk = 24
        targetSdk = 35
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        debug {
            buildConfigField("boolean", "DEV_MODE", "true")
        }
        release {
            buildConfigField("boolean", "DEV_MODE", "false")
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    buildFeatures {
        compose = true
        buildConfig = true
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.11"
    }
    kotlinOptions {
        jvmTarget = "17"
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)
    implementation(libs.material)
    implementation(libs.androidx.material3.android)
    implementation(libs.compose.material.icons.extended)
    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
    implementation(libs.androidx.compose.material)
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.ui.tooling.preview)
    debugImplementation(libs.androidx.compose.ui.tooling)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.navigation.compose)
    implementation(libs.androidx.activity)
    implementation(libs.hilt.android)
    kapt(libs.hilt.compiler)
    implementation(libs.coil.compose)
    implementation(libs.javapoet)
    implementation(libs.lifecycle.viewmodel.ktx)
    implementation(libs.hilt.navigation.compose)
}

hilt {
    enableAggregatingTask = false
}

//configurations.all {
//    resolutionStrategy.eachDependency {
//        if (requested.group == "com.squareup" && requested.name == "javapoet") {
//            useVersion("1.13.0")
//            because("Fix missing method canonicalName() error")
//        }
//    }
//}

kapt {
    correctErrorTypes = true
}