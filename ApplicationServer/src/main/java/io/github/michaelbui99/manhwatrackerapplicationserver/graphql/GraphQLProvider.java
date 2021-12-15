package io.github.michaelbui99.manhwatrackerapplicationserver.graphql;

import com.google.common.io.Resources;
import graphql.GraphQL;
import graphql.schema.GraphQLSchema;
import graphql.schema.idl.RuntimeWiring;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.net.URL;
import java.nio.charset.StandardCharsets;

@Component
public class GraphQLProvider {

    private GraphQL graphQL;


    @Bean
    public GraphQL graphQL(){
        return graphQL;
    }

    @PostConstruct
    public void init(){
        URL url = Resources.getResource("schema.graphqls");
        String sdl = Resources.toString(url, StandardCharsets.UTF_8);
        GraphQLSchema schema = buildSchema(sdl);
        this.graphQL = GraphQL.newGraphQL(schema).build();
    }
    public GraphQLSchema buildSchema(String sdl){
        // TODO: implement this
        TypeDefinitionRegistry typeDefinitionRegistry = new SchemaParser().parse(sdl);
        RuntimeWiring runtimeWiring = buildWiring();
    }
    private RuntimeWiring buildWiring(){
        return null;
    }
}
