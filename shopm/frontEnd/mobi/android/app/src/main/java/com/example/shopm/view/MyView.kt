package com.example.shopm.view

import android.view.View
import android.widget.RelativeLayout
import androidx.constraintlayout.widget.ConstraintLayout
import com.example.shopm.AppLog


open class MyView(options: Options?) {

    private val view: View? = options?.view
    private var height: Int = 0
    private var width: Int = 0
    private var tag: String = ""


    open fun init(): Boolean {
        if (this.view != null) {
            this.view.post {
                this.height = this.view.height
                this.width = this.view.width
            }
            return true
        } else {
            return false
        }
    }

    open fun getHeight(): Int {
        return this.height
    }

//    open fun setHeight(height: Int) {
//        if (this.view != null) {
//            val heightInDp = height
//            val heightInPx =
//                (heightInDp * this.view.context.resources.displayMetrics.density).toInt()
//            val params = this.view.layoutParams
//            params.height = heightInPx
//            this.view.layoutParams = params
//        } else {
//            AppLog.d(this.tag, "setHeight failure !")
//        }
//    }
//
//    open fun getWidth(): Int {
//        return this.width
//    }
//
//    open fun setMargin(left: Int, top: Int, right: Int, bottom: Int) {
//        if (this.view != null) {
//            val layoutParams = this.view.layoutParams as RelativeLayout.LayoutParams
//            layoutParams.setMargins(left, top, right, bottom)
//            this.view.layoutParams = layoutParams
//        } else {
//            AppLog.d(this.tag, "setHeight failure !")
//        }
//    }

    open fun setMarginTop(topMargin: Int) {
        if (this.view != null) {
            val density = this.view.context.resources.displayMetrics.density
            when (this.view.layoutParams) {
                is ConstraintLayout.LayoutParams -> {
                    val layoutParams = this.view.layoutParams as ConstraintLayout.LayoutParams
                    layoutParams.topMargin = topMargin
                    this.view.layoutParams = layoutParams
                }
                is RelativeLayout.LayoutParams -> {
                    val layoutParams = this.view.layoutParams as RelativeLayout.LayoutParams
                    layoutParams.addRule(RelativeLayout.ALIGN_PARENT_TOP)
                    layoutParams.topMargin = topMargin
                    this.view.layoutParams = layoutParams
                }
            }
        } else {
            AppLog.d(this.tag, "setMarginTop failure !")
        }
    }

    open fun setTag(tag: String) {
        this.tag = tag
    }

    open fun translateY(float: Float) {
        if (this.view != null) {
            this.view.post {
                val newHeight = this.height * (1 / 1f) * float
                this.view.translationY = newHeight
            }
        } else {
            AppLog.d(this.tag, "translateY failure !")
        }
    }
}