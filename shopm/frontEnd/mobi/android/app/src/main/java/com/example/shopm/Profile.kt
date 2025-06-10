package com.example.shopm

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.shopm.profile.ProfileView
import com.example.shopm.view.Options
import android.util.Log


// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

/**
 * A simple [Fragment] subclass.
 * Use the [Profile.newInstance] factory method to
 * create an instance of this fragment.
 */
class Profile : Fragment() {
    // TODO: Rename and change types of parameters
    private var param1: String? = null
    private var param2: String? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            param1 = it.getString(ARG_PARAM1)
            param2 = it.getString(ARG_PARAM2)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_profile, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val viewAvatar = view.findViewById<View>(R.id.profile_avatar)
        val viewName = view.findViewById<View>(R.id.profile_name)

        val optionsAvatar: Options = object : Options {
            override val view: View? = viewAvatar
        }
        val optionsName: Options = object : Options {
            override val view: View? = viewName
        }

        val avatarView = ProfileView(optionsAvatar)
        avatarView.setTag("Profile Screen (avatarView)")
        avatarView.init()
        avatarView.translateY(0.5f)
        val heightAvatar: Int = avatarView.getHeight()
        Log.d("heightAvatar", "Đây là log mức DEBUG: ${heightAvatar}")

        val nameView = ProfileView(optionsName)
        nameView.setTag("Profile Screen (nameView)")
        nameView.init()
        nameView.setMarginTop(100)
    }

    companion object {
        /**
         * Use this factory method to create a new instance of
         * this fragment using the provided parameters.
         *
         * @param param1 Parameter 1.
         * @param param2 Parameter 2.
         * @return A new instance of fragment Profile.
         */
        // TODO: Rename and change types and number of parameters
        @JvmStatic
        fun newInstance(param1: String, param2: String) =
            Profile().apply {
                arguments = Bundle().apply {
                    putString(ARG_PARAM1, param1)
                    putString(ARG_PARAM2, param2)
                }
            }
    }
}