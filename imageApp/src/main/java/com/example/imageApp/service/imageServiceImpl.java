package com.example.imageApp.service;

import com.example.imageApp.model.image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class imageServiceImpl implements imageService{


    @Autowired
    com.example.imageApp.repository.imageRepository imageRepository;

    @Override
    public List<image> findAllImage() {
        return imageRepository.findAll();
    }

    @Override
    public image findByname(String imageName) {
        return imageRepository.findByName(imageName);
    }

    @Override
    public image createImage(image image) {
        return imageRepository.save(image);
    }
}
