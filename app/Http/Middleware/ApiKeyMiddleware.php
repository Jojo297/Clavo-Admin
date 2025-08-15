<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiKeyMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $apiKey = $request->header('X-API-KEY');

        $validApiKey = env('VITE_MODELS_API_KEY');
        if (!$apiKey || $apiKey !== $validApiKey) {
            return response()->json(['error' => 'Your not allow to access this resource'], 401);
        }
        return $next($request);
    }
}
