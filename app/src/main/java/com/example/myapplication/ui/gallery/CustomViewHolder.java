package com.example.myapplication.ui.gallery;

import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.myapplication.R;
import com.example.myapplication.models.Workspace;


public class CustomViewHolder extends RecyclerView.ViewHolder {
    private static final String TAG = "CustomViewHolder";

    private final TextView textView;
    private final Button mButton;
    private Workspace mWorkspace;

    public CustomViewHolder(@NonNull View view) {
        super(view);

        this.textView = (TextView) view.findViewById(R.id.textView2);
        this.mButton = (Button) view.findViewById(R.id.button2);
        this.mButton.setOnClickListener(btn -> {
            Log.d(TAG,"button.setOnClickListener()");
            callback.OnButtonPressed(mWorkspace);
        });
    }

    OnViewHolderListener callback;
    public void setOnViewHolderListener(OnViewHolderListener callback) {
        this.callback = callback;
    }

    public void setWorkspace(Workspace workspace) {
        this.mWorkspace = workspace;
        this.textView.setText(workspace.Name);
    }

    interface OnViewHolderListener {
        public void OnButtonPressed(Workspace workspace);
    }









}
