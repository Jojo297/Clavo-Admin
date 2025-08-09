<?php

namespace App\Http\Controllers;

use App\Models\Model_tflite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        $path = $request->file('model')->storeAs('models', $fileName, 'public');

        // Simpan data ke database
        $model = Model_tflite::create([
            'model_name' => $request->modelName,
            'fruit_type' => $request->fruitType,
            'path'       => $path,
            'id_user'    => $request->id_user,
        ]);

        return response()->json([
            'message' => 'Model uploaded successfully',
            'path' => $path
        ]);
    }
    public function destroy($id)
    {
        $model = Model_tflite::findOrFail($id);

        // Hapus file fisiknya
        if (Storage::exists($model->path)) {
            Storage::delete($model->path);
        }

        // Hapus data di database
        $model->delete();

        return response()->json(['message' => 'Model deleted successfully']);
    }
    public function getAllModels()
    {
        $models = Model_tflite::all()->map(function ($model) {
            $model->path = asset('storage/' . $model->path);
            return $model;
        });

        return response()->json($models);
    }
}
