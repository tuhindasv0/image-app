package com.example.imageApp.service;

import com.example.imageApp.model.image;

import java.util.List;

public interface imageService {

    public List<image> findAllImage();

    public image findByname(String imageName);

    public image createImage(image image);
}
