package io.github.michaelbui99.manhwatrackerapplicationserver.graphql;

import io.github.michaelbui99.manhwatrackerapplicationserver.model.manhwa.Manhwa;
import io.github.michaelbui99.manhwatrackerapplicationserver.services.ManhwaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ManhwaController {
    private ManhwaService manhwaService;

    @Autowired
    public ManhwaController(ManhwaService manhwaService) {
        this.manhwaService = manhwaService;
    }

    @QueryMapping
    public List<Manhwa> allManhwas(){
        return manhwaService.getAll();
    }

    @QueryMapping
    public List<Manhwa> manhwasByTitle(@Argument String title){
        return manhwaService.getByTitle(title);
    }
}
