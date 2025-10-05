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

        // save file to storage/app/private/models
        $fileName = time() . '_' . $request->file('model')->getClientOriginalName();
        $path = $request->file('model')->storeAs('models', $fileName, 'local');

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

        if (Storage::disk("local")->exists($model->path)) {
            Storage::disk("local")->delete($model->path);
        }

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
    public function modelsUpdate(Request $request, $id)
    {
        $model = Model_tflite::findOrFail($id);

        // Update model name and fruit type
        $model->model_name = $request->model_name;
        $model->fruit_type = $request->fruit_type;

        // save 
        $model->save();

        return response()->json(['message' => 'Model updated successfully']);
    }

    public function downloadModel($filename)
    {
        // dd($filename);
        $secureFilename = basename($filename);

        $filePath = 'models/' . $secureFilename;

        if (!Storage::disk('local')->exists($filePath)) {
            return response()->json(['error' => 'File not found.'], 404);
        }

        $fullPath = Storage::disk('local')->path($filePath);

        // Gunakan helper response() untuk membuat unduhan
        return response()->download($fullPath);
    }
}
