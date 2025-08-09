<?php

namespace App\Http\Controllers;

use App\Models\Model_tflite;
use Illuminate\Http\Request;

class ModelController extends Controller
{
    // Upload model from admin
    public function uploadModel(Request $request)
    {
        // check file extension
        $ext = $request->file('model')->getClientOriginalExtension();
        if ($ext !== 'tflite') {
            return response()->json(['error' => 'File must be .tflite'], 422);
        }

        // Simpan file ke storage/app/models
        $fileName = time() . '_' . $request->file('model')->getClientOriginalName();
        $path = $request->file('model')->storeAs('models', $fileName);

        // Simpan data ke database
        $model = Model_tflite::create([
            'model_name' => "",
            'fruit_type' => $request->fruitType,
            'path'       => $path,
            'id_user'    => $request->id_user, // atau dari request jika admin upload untuk user lain
        ]);

        return response()->json([
            'message' => 'Model uploaded successfully',
            'path' => $path
        ]);
    }
}
