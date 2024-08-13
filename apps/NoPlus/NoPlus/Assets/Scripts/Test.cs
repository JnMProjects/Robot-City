using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEditor.SceneManagement;
using UnityEditor.Overlays;

[CustomEditor(typeof(Test))]
public class TestEditor : Editor
{

    private bool SETUPFoldopen;
    private bool LSFoldopen;

    private bool LSActivated;

    private SerializedProperty Sanimator;
    

    public void OnEnable()
    {
        Sanimator = serializedObject.FindProperty("animator");
    }


    public override void OnInspectorGUI()
    {
        Test script = (Test)target;
        
        GUILayout.Label("Game Test System", EditorStyles.boldLabel);

        GUILayout.Space(10);

        SETUPFoldopen = EditorGUILayout.BeginFoldoutHeaderGroup(SETUPFoldopen, "Setup");
        if (SETUPFoldopen)
        {
            
            EditorGUILayout.ObjectField("Animator: ", script.animator, typeof(Animator), true);


            if (LSActivated)
            {
                if (script.animator == null)
                {
                    EditorGUILayout.HelpBox("You need to have a Animator Set to use Loading System", MessageType.Error);
                } else if (script.animator.parameters.ToString().Contains("Exit") == false)
                {
                    EditorGUILayout.HelpBox("You need to have a Exit Boolean Parameter in the Animator to use Loading System", MessageType.Warning);
                }
            }
        }
        EditorGUILayout.EndFoldoutHeaderGroup();

        GUILayout.Space(5);

        LSFoldopen = EditorGUILayout.BeginFoldoutHeaderGroup(LSFoldopen, "Loading System");
        if (LSFoldopen)
        {
            LSActivated = EditorGUILayout.Toggle("Activate Loading System", LSActivated);
            if (LSActivated)
            {
                EditorGUILayout.LabelField("Placeholder", EditorStyles.boldLabel);
            }
        }
        EditorGUILayout.EndFoldoutHeaderGroup();

        if (GUI.changed)
        {
        }
    }
}

public class Test : MonoBehaviour
{
    public Animator animator;

    private void Awake()
    {
        if (!animator && GetComponent<Animator>())
        {
            animator = GetComponent<Animator>();
        }
    }

    public void LoadingSystemGoTo(string WhereTo, Animator animator)
    {
        GetComponent<LoadScene>().Load(WhereTo, 0, animator);
    }
}
